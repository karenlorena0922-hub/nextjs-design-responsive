import { ArrowIcon } from "./ArrowIcon";

export type IconLinkProps = { href: string; label: string; ariaLabel?: string };

export function IconLink({ href, label, ariaLabel = label }: IconLinkProps) {
  return <a className="circle-link" href={href} aria-label={ariaLabel}><ArrowIcon diagonal /><span>{label}</span></a>;
}
