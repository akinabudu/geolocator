// Listen for the beforeinstallprompt event
let deferredPrompt: any = null;

 globalThis.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the default mini-infobar or install dialog from appearing on mobile
  e.preventDefault();
  // Save the event because you'll need to trigger it later
  deferredPrompt = e;
  // Show your customized install prompt for your PWA
  // Your UI can be a button or any other element
  // showInAppInstallPromotion();
});

// When the user clicks your custom install button:
export function InstallPWA() {
  if (deferredPrompt) {
    // Prompt the user to install the PWA
    deferredPrompt.prompt();
    // Wait for the user's choice (accepted or dismissed)
    deferredPrompt.userChoice.then((choiceResult: { outcome: 'accepted' | 'dismissed' }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA installation');
      } else {
        console.log('User dismissed the PWA installation');
      }
      // Clear the saved event
      deferredPrompt = null;
    });
  }
}
