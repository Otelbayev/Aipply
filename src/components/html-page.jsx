export function HTMLPage({ src }) {
  return (
    <iframe
      src={src}
      width="100%"
      style={{ border: "none", minHeight: "100dvh" }}
    />
  );
}
