package com.hsn6.t3u;

import android.widget.Toast;
import android.content.Context;
import java.io.IOException;
import android.content.res.AssetFileDescriptor;
import android.media.MediaPlayer;
import android.webkit.JavascriptInterface;
import java.util.Arrays;
//import android.media.MediaPlayer.OnCompletionListener;

public class WebAppInterface {
    Context mContext;
    MediaPlayer mp = null;
    MediaPlayer mp2 = null;

    /** Instantiate the interface and set the context */
    WebAppInterface(Context c) {
        mContext = c;
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
