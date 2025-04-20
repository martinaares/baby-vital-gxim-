
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Moon, Apple, Bath, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface TipCategory {
  icon: React.ComponentType;
  title: string;
  tips: string[];
}

const PediatricTips = () => {
  const { t } = useTranslation();
  
  const categories: TipCategory[] = [
    {
      icon: Moon,
      title: t('tips.sleep.title'),
      tips: [t('tips.sleep.tip1'), t('tips.sleep.tip2')]
    },
    {
      icon: Apple,
      title: t('tips.nutrition.title'),
      tips: [t('tips.nutrition.tip1'), t('tips.nutrition.tip2')]
    },
    {
      icon: Bath,
      title: t('tips.hygiene.title'),
      tips: [t('tips.hygiene.tip1'), t('tips.hygiene.tip2')]
    },
    {
      icon: AlertCircle,
      title: t('tips.alerts.title'),
      tips: [t('tips.alerts.tip1'), t('tips.alerts.tip2')]
    },
    {
      icon: Brain,
      title: t('tips.development.title'),
      tips: [t('tips.development.tip1'), t('tips.development.tip2')]
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold baby-gradient bg-clip-text text-transparent">
        {t('tips.title')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-sm text-muted-foreground">
                      • {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PediatricTips;
