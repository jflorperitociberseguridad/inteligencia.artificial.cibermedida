export const Logo = ({ size = 36 }) => (
  <img
    src="/logo-full.png"
    alt="Logotipo de Cibermedida"
    data-testid="cibermedida-logo-svg"
    aria-hidden="true"
    className="rounded-xl shadow-[0_0_18px_rgba(63,224,242,0.3)]"
    style={{ height: size, width: "auto" }}
  />
);
