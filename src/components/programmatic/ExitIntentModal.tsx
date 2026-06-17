import { useState, type FormEvent } from 'react';
import { useExitIntent } from '@/hooks/useExitIntent';

export function ExitIntentModal() {
  const { show, dismiss, markSubmitted } = useExitIntent();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  if (!show) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    try {
      await fetch('https://drivewayzusa.app.n8n.cloud/webhook/betweenstays-tampa-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          propertyAddress: 'exit-intent-guide',
          lead_source: 'exit-intent-guide',
        }),
      });
      markSubmitted();
      setStatus('done');
    } catch (err) {
      console.error('Exit-intent webhook error:', err);
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-900/70 flex items-center justify-center px-4"
      onClick={dismiss}
    >
      <div
        className="bg-white rounded-lg max-w-md w-full p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 text-stone-500 hover:text-stone-900 text-2xl leading-none w-10 h-10 flex items-center justify-center"
        >
          ×
        </button>
        {status === 'done' ? (
          <div className="text-center py-4">
            <h3 className="text-xl font-semibold text-stone-900 mb-2">Got it.</h3>
            <p className="text-stone-700">We will email your guide within 1 business day.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-stone-900 mb-2">
              Before you go: 5 Questions to Ask Before Hiring Any Property Manager
            </h3>
            <p className="text-stone-700 text-sm mb-5">
              A short guide built from Pinellas County owner conversations. Email it to me.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-400 text-base min-h-[48px]"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-stone-900 text-white font-medium px-6 py-3 rounded-md hover:bg-stone-800 transition-colors min-h-[48px] disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Me the Guide'}
              </button>
              {status === 'error' && (
                <p className="text-rose-700 text-sm">Something went wrong. Try again or email us directly.</p>
              )}
            </form>
            <p className="text-stone-500 text-xs mt-4 text-center">
              No spam. One email, one guide. Or reply directly to ask a question.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
