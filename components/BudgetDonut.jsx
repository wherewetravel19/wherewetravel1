import { budgetBreakdown } from "@/lib/data";
import styles from "./BudgetDonut.module.css";

export default function BudgetDonut({ total = 2850, days = 7, travelers = 2 }) {
  let offsetAccumulator = 0;
  const segments = budgetBreakdown.map((item) => {
    const dasharray = `${item.pct} ${100 - item.pct}`;
    const dashoffset = 25 - offsetAccumulator;
    offsetAccumulator += item.pct;
    return { ...item, dasharray, dashoffset };
  });

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h4>Total Trip Budget ${total.toLocaleString()}</h4>
        <span>{days} days · {travelers} travelers</span>
      </div>
      <div className={styles.donutWrap}>
        <svg width="200" height="200" viewBox="0 0 42 42" className={styles.svg}>
          <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="#e7ecef" strokeWidth="6" />
          {segments.map((s, i) => (
            <circle
              key={i}
              cx="21"
              cy="21"
              r="15.9"
              fill="transparent"
              stroke={s.color}
              strokeWidth="6"
              strokeDasharray={s.dasharray}
              strokeDashoffset={s.dashoffset}
              transform="rotate(-90 21 21)"
            />
          ))}
          <text x="21" y="20" textAnchor="middle" fontSize="4.2" fontWeight="800" fill="#0f3d5c">
            ${total.toLocaleString()}
          </text>
          <text x="21" y="25" textAnchor="middle" fontSize="2.4" fill="#6b7280">
            Total
          </text>
        </svg>
        <div className={styles.legend}>
          {budgetBreakdown.map((b) => (
            <div className={styles.legendItem} key={b.label}>
              <div className={styles.legendLeft}>
                <span className={styles.dot} style={{ background: b.color }} />
                <span className={styles.label}>{b.label}</span>
              </div>
              <div>
                <span className={styles.value}>${b.value}</span>
                <span className={styles.pct}> ({b.pct}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
