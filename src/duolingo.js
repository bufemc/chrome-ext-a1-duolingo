/**
* Airport1 Duolingo Improvement, a Chrome extension
* 
* Duolingo hotkey extension to enable the microphone button for speaking 
* exercises in Chrome browsers by using the space bar - instead of using
* the mouse. Works also in older SRWare Iron browser.
*
* So far you had to move the mouse instead, which is not user-friendly. 
* This extension was built on intent to be small and use plain Javascript
* only, but in jQuery the call would be like this: 
* btn_microphone = $('button[data-test="challenge-speak-button"]').click();
*
* If the extension should not work at all, consider your browser might be
* too old. But if it worked before, maybe Duolingo have changed their
* markup meanwhile. If so, inform the author: http://www.airport1.de/ -
* go to imprint, and drop an email to Marc Bufe. 
*
* Thanks, and happy learning! 
*
* Further hints for Duolingo: you can use the keys 1,2,3 in multiple choice
* tests. Other important keys are space bar, return key and up/down keys.
*/
	
var btn_microphone_hotkey = false;
var btn_microphone_found = false;

if (!btn_microphone_hotkey) 
{
	document.addEventListener('keydown', function()
	{
		if (event.key == ' ') 
		{
			btn_microphone = document.querySelector
				('button[data-test="challenge-speak-button"]');
			if (btn_microphone) 
			{
				btn_microphone_found = true;
				btn_microphone.click();
			}	
		}
	});
	btn_microphone_hotkey = true;
}
