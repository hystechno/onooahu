// Google AdSense placeholder component
// ==========================================
// INSTRUCTIONS TO ACTIVATE ADSENSE:
// 1. Apply at https://www.google.com/adsense with your domain
// 2. Once approved, replace "ca-pub-XXXXXXXXXXXXXXXX" below with your real publisher ID
//    (found in AdSense dashboard → Account → Publisher ID)
// 3. The ads will automatically activate site-wide
// ==========================================

export default function AdSenseSlot({
  slot,
  format = 'auto',
  responsive = true,
}: {
  slot: string;
  format?: string;
  responsive?: boolean;
}) {
  const AD_CLIENT_ID = 'ca-pub-XXXXXXXXXXXXXXXX';
  const isPlaceholder = AD_CLIENT_ID.includes('XXXXXXX');

  if (isPlaceholder) {
    // Visual placeholder during development — shows where ads will appear
    return (
      <div className="w-full flex justify-center my-8">
        <div
          className="w-full max-w-[728px] h-[90px] md:h-[90px] bg-[#f0ebe4] border-2 border-dashed border-[#d4a574] rounded-lg flex items-center justify-center"
          style={{ minHeight: format === 'vertical' ? '600px' : '90px' }}
        >
          <div className="text-center">
            <p className="text-xs text-[#b8a08a] font-sans uppercase tracking-wide">AdSense Slot: {slot}</p>
            <p className="text-[10px] text-[#b8a08a] font-sans mt-1">Replace placeholder ID to activate</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={AD_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
