
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { useTranslation } from 'react-i18next';

// Definición de tipos
type SleepPeriod = "deep" | "light" | "awake";
type SleepData = {
  time: string;
  status: SleepPeriod;
  heartRate: number;
  respiratoryRate: number;
};

// Props del componente
type SleepChartProps = {
  data: SleepData[];
};

// Componente para el tooltip personalizado
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  const { t } = useTranslation();
  if (active && payload && payload.length) {
    const sleepStatus = payload[0].payload.status;
    return (
      <div className="bg-white p-3 shadow-md rounded-md border border-gray-100">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-sm">
          {t(`sleep.${sleepStatus}`)}
        </p>
        <p className="text-sm">
          {t("heart.rate")}: {payload[0].payload.heartRate} bpm
        </p>
        <p className="text-sm">
          {t("respiratory.rate")}: {payload[0].payload.respiratoryRate} /min
        </p>
      </div>
    );
  }
  return null;
};

// Función para mapear el estado de sueño a un valor numérico
const mapSleepStatusToValue = (status: SleepPeriod): number => {
  switch (status) {
    case 'deep': return 3;
    case 'light': return 2;
    case 'awake': return 1;
    default: return 0;
  }
};

// Componente principal del gráfico
export const SleepChart = ({ data }: SleepChartProps) => {
  const { t } = useTranslation();
  
  // Preparamos los datos para el gráfico
  const chartData = data.map(entry => ({
    ...entry,
    value: mapSleepStatusToValue(entry.status),
  }));
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <XAxis 
          dataKey="time" 
          tick={{ fontSize: 12 }} 
          tickLine={false}
          axisLine={{ stroke: '#eee' }}
        />
        <YAxis 
          domain={[0, 4]}
          ticks={[1, 2, 3]} 
          tickFormatter={(value) => {
            if (value === 1) return t('sleep.awake');
            if (value === 2) return t('sleep.light');
            if (value === 3) return t('sleep.deep');
            return '';
          }}
          tick={{ fontSize: 11 }}
          tickLine={false}
          axisLine={{ stroke: '#eee' }}
          width={60}
        />
        <Tooltip content={<CustomTooltip />} />
        <defs>
          <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity={0.8}/>
            <stop offset="50%" stopColor="#A78BFA" stopOpacity={0.5}/>
            <stop offset="100%" stopColor="#FDE68A" stopOpacity={0.3}/>
          </linearGradient>
        </defs>
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#6366F1" 
          fill="url(#sleepGradient)"
          strokeWidth={2}
          activeDot={{ r: 6, strokeWidth: 1, stroke: '#fff' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
