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
import com.hsn6.t3u.WebAppInterface;


public class main_activity extends Activity
{
    WebView myWebView;
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
	this.myWebView = (WebView) findViewById(R.id.webview);
	myWebView.addJavascriptInterface(new WebAppInterface(this), "Android");
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
	
	myWebView.loadUrl("file:///android_asset/niveloj.html");
    }
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
	if (keyCode == KeyEvent.KEYCODE_BACK) { 
	    myWebView.loadUrl("file:///android_asset/niveloj.html");
	    return true;
	}
	else{
	    //finish();
	}
	return super.onKeyDown(keyCode, event);
    }
}
