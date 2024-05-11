'use client'
import React from 'react';
import { useWakeLock } from 'react-screen-wake-lock';

function ScreenWakeLockComponent() {
  const { isSupported, released, request, release } = useWakeLock({
    onRequest: () => alert('Screen Wake Lock: requested!'),
    onError: () => alert('An error happened \uD83D\uDCA5'),
    onRelease: () => alert('Screen Wake Lock: released!'),
  });
  React.useEffect(() => {
    request();
  }, []);

  return (
    <div>
      <p>
        Screen Wake Lock API supported: <b>{`${isSupported}`}</b>
        <br />
        Released: <b>{`${released}`}</b>
      </p>
      <button className='border p-5'
        type="button"
        onClick={() => (released === false ? release() : request())}
      >
        {released === false ? 'Release' : 'Request'}
      </button>
    </div>
  );
}

export default ScreenWakeLockComponent;
