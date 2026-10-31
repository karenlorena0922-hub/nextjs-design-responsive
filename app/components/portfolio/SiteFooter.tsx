import type { PortfolioContent } from "../../content";

export function SiteFooter({ content }: { content: Pick<PortfolioContent, "navigation" | "footer"> }) {
  return <footer className="site-footer"><div className="page-shell footer-inner"><span>{content.footer.copyright}</span><span>{content.footer.descriptor}</span><a href="#top">{content.navigation.backToTopLabel}</a></div></footer>;
}
