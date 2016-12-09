package com.hsn6.t3u;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.net.Uri;
import android.content.Intent;
import android.view.View;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.widget.Toast;
import android.content.Context;
import android.app.AlertDialog;
import android.content.DialogInterface;
//import com.hsn6.t3u.WebAppInterface;
import com.hsn6.t3u.util.*;
import java.io.IOException;
import android.content.res.AssetFileDescriptor;
import android.media.MediaPlayer;
import android.webkit.JavascriptInterface;
import java.util.Arrays;

public class main_activity extends Activity
{
    WebView myWebView;
    IabHelper mHelper;
    static final String sku = "malsxlosi_niveloj";
    String nl = "";
    boolean mIsPremium = false;
    private static final String TAG = "MyActivity";
    String base64EncodedPublicKey = "MIHNMA0GCSqGSIb3DQEBAQUAA4G7ADCBtwKBrwDlg0mxCv+lAB1ozwdOxRTDSeFbu9vBwSfGOcBhJ5mzEEJzhzvzM+hP+4IBZ70p8t58r/QY29BKgf83zHDXw7Shm2Rq0Gv95likDDWMBPh8FmZu9JnDslQ7kLUisju+BItlRnVk0O80JxzBwQfQqx7wbUuFpWLr35U4o+fZ1vFqProi3j9Mwf+MmzqXxpyL36CVEiQqx922WqynnohPim+7+8kYpQ52mujEaPB7iecCAwEAAQ==";
    //Context mContext;
    /** Instantiate the interface and set the context */
    //WebAppInterface(Context c) {
    //mContext = c;
    //}
    //Context mContext = this;
    String niveloj = "file:///android_asset/niveloj.html";
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
	mHelper = new IabHelper(this, base64EncodedPublicKey);
	mHelper.enableDebugLogging(true);
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
	this.myWebView = (WebView) findViewById(R.id.webview);
	myWebView.addJavascriptInterface(new WebAppInterface(this, this), "Android");
	myWebView.addJavascriptInterface(main_activity.this, "mAndroid");
	WebSettings webSettings = myWebView.getSettings();
	webSettings.setJavaScriptEnabled(true);
	webSettings.setDomStorageEnabled(true);
	myWebView.setWebViewClient(new WebViewClient());
	myWebView.setOnLongClickListener(new View.OnLongClickListener() {
	    @Override
	    public boolean onLongClick(View v) {
		return true;
	    }
	});
	myWebView.setLongClickable(false);
	// disable scroll on touch
	myWebView.setOnTouchListener(new View.OnTouchListener() {
		@Override
		public boolean onTouch(View v, MotionEvent event) {
		    return (event.getAction() == MotionEvent.ACTION_MOVE);
		}
	    });
	myWebView.setVerticalScrollBarEnabled(false);
	myWebView.setHorizontalScrollBarEnabled(false);
	
	mHelper.startSetup(new IabHelper.OnIabSetupFinishedListener() {
            public void onIabSetupFinished(IabResult result) {
                Log.d(TAG, "Setup finished.");

                if (!result.isSuccess()) {
                    // Oh noes, there was a problem.
                    Log.d(TAG,"Problem setting up in-app billing: " + result);
                    return;
                }

                // Have we been disposed of in the meantime? If so, quit.
                if (mHelper == null) return;

                // IAB is fully set up. Now, let's get an inventory of stuff we own.
                Log.d(TAG, "Setup successful. Querying inventory.");
                mHelper.queryInventoryAsync(mGotInventoryListener);
            }
        });
	myWebView.loadUrl("file:///android_asset/niveloj.html");	
    }
    // Listener that's called when we finish querying the items and subscriptions we own
    IabHelper.QueryInventoryFinishedListener mGotInventoryListener = new IabHelper.QueryInventoryFinishedListener() {
	    public void onQueryInventoryFinished(IabResult result, Inventory inventory) {
		Log.d(TAG, "Query inventory finished.");
		
		// Have we been disposed of in the meantime? If so, quit.
		if (mHelper == null) return;
		
		// Is it a failure?
		if (result.isFailure()) {
		    Log.d(TAG, "Failed to query inventory: " + result);
		    return;
		}
		
		Log.d(TAG, "Query inventory was successful.");
		
		/*
		 * Check for items we own. Notice that for each purchase, we check
		 * the developer payload to see if it's correct! See
		 * verifyDeveloperPayload().
		 */
		// Do we have the premium upgrade?
		Purchase malsxlosita = inventory.getPurchase(sku);
		mIsPremium = (malsxlosita != null && verifyDeveloperPayload(malsxlosita));
		Log.d(TAG, "User is " + (mIsPremium ? "PREMIUM" : "NOT PREMIUM"));
		if (mIsPremium){
		    myWebView.loadUrl("javascript:window.localStorage.sxlosita = 0;");
		}
		else{
		    myWebView.loadUrl("javascript:window.localStorage.sxlosita = 1;");
		}
	    }
	};
    @JavascriptInterface
    public void malsxlosi_dialogo(){
	new AlertDialog.Builder(this)
	    //.setIcon(android.R.drawable.ic_dialog_alert)
	    .setTitle(R.string.buy)
	    .setMessage(R.string.really_buy)
	    .setPositiveButton(R.string.yes, new DialogInterface.OnClickListener() {
		    @Override
		    public void onClick(DialogInterface dialog, int which) {
			mHelper.launchPurchaseFlow(main_activity.this, sku, 2000, mPurchaseFinishedListener, nl);	
		    }
		})
	    .setNegativeButton(R.string.no, null)
	    .show();
    };
    @Override
    public void onDestroy() {
	super.onDestroy();
	if (mHelper != null) mHelper.dispose();
	mHelper = null;
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
	super.onActivityResult(requestCode, resultCode, data);
	
	Log.d(TAG, "onActivityResult(" + requestCode + "," + resultCode + "," + data);
	
	// Pass on the activity result to the helper for handling
	if (!mHelper.handleActivityResult(requestCode, resultCode, data)) {
	    super.onActivityResult(requestCode, resultCode, data);
	} else {
	    Log.d(TAG, "onActivityResult handled by IABUtil.");
	}
    }
    boolean verifyDeveloperPayload(Purchase p) {
        String payload = p.getDeveloperPayload();
        return true;
    };
    IabHelper.OnIabPurchaseFinishedListener mPurchaseFinishedListener
	= new IabHelper.OnIabPurchaseFinishedListener() {
		public void onIabPurchaseFinished(IabResult result, Purchase purchase)
		{
		    if (result.isFailure()) {
			Log.d(TAG, "Error purchasing: " + result);
			return;
		    }      
		    else if (purchase.getSku().equals(sku)) {
			myWebView.loadUrl("javascript:window.localStorage.sxlosita = 0;");
			myWebView.reload();
		    }
		}
	    };
    
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
	if (keyCode == KeyEvent.KEYCODE_BACK) {
	    if (niveloj.equals(myWebView.getUrl())) {
		new AlertDialog.Builder(this)
		    //.setIcon(android.R.drawable.ic_dialog_alert)
		    .setTitle(R.string.quit)
		    .setMessage(R.string.really_quit)
		    .setPositiveButton(R.string.yes, new DialogInterface.OnClickListener() {
			    @Override
			    public void onClick(DialogInterface dialog, int which) {
				main_activity.this.finish();
			    }
			})
		    .setNegativeButton(R.string.no, null)
		    .show();
		return true;
	    }
	    else{
		myWebView.loadUrl("file:///android_asset/niveloj.html");
		return true;
	    }
	}
	if (keyCode == KeyEvent.KEYCODE_MENU){
	    if (niveloj.equals(myWebView.getUrl())) {
		new AlertDialog.Builder(this)
		    //.setIcon(android.R.drawable.ic_dialog_alert)
		    .setTitle(R.string.reset)
		    .setMessage(R.string.really_reset)
		    .setPositiveButton(R.string.yes, new DialogInterface.OnClickListener() {
			    @Override
			    public void onClick(DialogInterface dialog, int which) {
				myWebView.loadUrl("javascript:window.localStorage.nivelo_flava = 0; window.localStorage.nivelo_verda = 0; window.localStorage.nivelo_blua = 0; window.localStorage.nivelo_viola = 0");
				myWebView.reload();
			    }
			})
		    .setNegativeButton(R.string.no, null)
		    .show();
		return true;
	    }
	    else{
		myWebView.reload();
		return true;
	    }
	}
	return super.onKeyDown(keyCode, event);
    }
}

class WebAppInterface {
    //Context mContext;
    MediaPlayer mp = null;
    MediaPlayer mp2 = null;
    Context mContext;
    Activity mActivity;

    /** Instantiate the interface and set the context */
    WebAppInterface(Context c, Activity a) {
        mContext = c;
        mActivity = a;

    }
    /** Show a toast from the web page */
    @JavascriptInterface
    public void showToast(String toast) {
        Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
    }
    @JavascriptInterface
    public void playAudio(String aud) { //String aud - file name passed 
	//from the JavaScript function
	
	try {
	    if (mp != null) {
		//mp.reset();
		mp.release();
	    }
	    AssetFileDescriptor fileDescriptor = mContext.getAssets().openFd(aud);
	    mp = new MediaPlayer();
	    mp.setDataSource(fileDescriptor.getFileDescriptor(), 
			     fileDescriptor.getStartOffset(), 
			     fileDescriptor.getLength());
	    fileDescriptor.close();
	    mp.prepare();
	    mp.start();
	} catch (IllegalArgumentException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	} catch (IllegalStateException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	} catch (IOException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	}	 
    }
    @JavascriptInterface
    public void playAudio2(String aud) { //String aud - file name passed 
	//from the JavaScript function
	
	try {
	    if (mp2 != null) {
		//mp2.reset();
		mp2.release();
	    }
	    AssetFileDescriptor fileDescriptor = mContext.getAssets().openFd(aud);
	    mp2 = new MediaPlayer();
	    mp2.setDataSource(fileDescriptor.getFileDescriptor(), 
			     fileDescriptor.getStartOffset(), 
			     fileDescriptor.getLength());
	    fileDescriptor.close();
	    mp2.prepare();
	    mp2.start();
	} catch (IllegalArgumentException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	} catch (IllegalStateException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	} catch (IOException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	}	 
    }
}
