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

public class main_activity extends Activity
{
    String msg = "Android : ";
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
	WebView myWebView = (WebView) findViewById(R.id.webview);
	WebSettings webSettings = myWebView.getSettings();
	webSettings.setJavaScriptEnabled(true);
	myWebView.setWebViewClient(new WebViewClient());
	myWebView.setOnLongClickListener(new View.OnLongClickListener() {
	    @Override
	    public boolean onLongClick(View v) {
		return true;
	    }
	});
	myWebView.setLongClickable(false);
	myWebView.loadUrl("file:///android_asset/ludo.html?nivelo=0");
	
	
    }
    

}
