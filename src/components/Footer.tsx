import { useLang } from "@/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap inner">
        <span>© {new Date().getFullYear()} Sergio Ortuño Galvañ</span>
        <span>{t("footer.made")}</span>
      </div>
    </footer>
  );
}
