
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Download, Share } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WeeklyRecords = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-4xl"
      >
        <header className="mb-8">
          <Link 
            to="/" 
            className="mb-4 inline-flex items-center text-secondary-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back.to.monitor')}
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-foreground">{t('weekly.records')}</h1>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4" />
                {t('download')}
              </button>
              <button className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
                <Share className="h-4 w-4" />
                {t('share')}
              </button>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <section className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5" />
              <h2 className="text-xl font-semibold">{t('current.week')}</h2>
            </div>
            <p className="text-secondary-foreground">{t('no.records')}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default WeeklyRecords;
