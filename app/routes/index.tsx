export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix + Vercel Image Optimization</h1>
      <img
        src="/_vercel/image?url=/img/remix.png&w=400&q=75"
        alt="Remix logo"
      />

      <img
        src="/_vercel/image?url=/img/remix.png&w=400&q=75"
        alt="Remix logo"
      />
    </div>
  );
}
