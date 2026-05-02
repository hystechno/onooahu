// Google AdSense placeholder component
// Replace AD_CLIENT_ID with your actual AdSense client ID after approval
export default function AdSenseSlot({ slot, format = 'auto', responsive = true }: { slot: string; format?: string; responsive?: boolean }) {
  return (
    <div className="w-full flex justify-center my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
