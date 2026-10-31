export type ArrowIconProps = { diagonal?: boolean };

export function ArrowIcon({ diagonal = false }: ArrowIconProps) {
  return diagonal ? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.5" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h17m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.5" /></svg>
  );
}
