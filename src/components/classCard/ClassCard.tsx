import { Avatar } from "../avatar";
import { Button } from "../buttons";
import { Card } from "../card";
import { DotMeter } from "../dotMeter";
import { Icon } from "../icon";
import { Tag } from "../tag";
import { iconSize } from "../../tokens/iconSize";
import { iconWeightForSize } from "../../tokens/iconWeight";
import type { ClassCardProps } from "./types";
import "./classCard.css";

export function ClassCard({
  studioName,
  studioLogoSrc,
  level,
  levelColor = "neutral",
  title,
  startTime,
  endTime,
  duration,
  instructor,
  capacityFilled,
  capacityTotal,
  ctaLabel = "Fazer check-in",
  onCheckIn,
  className
}: ClassCardProps) {
  const cls = ["vds-class-card", className].filter(Boolean).join(" ");

  return (
    <Card padding="lg" surface="default" radius="lg" className={cls}>
      <header className="vds-class-card__header">
        <div className="vds-class-card__studio">
          <Avatar
            size="sm"
            src={studioLogoSrc}
            name={studioName}
            alt={`Logo · ${studioName}`}
          />
          <span className="vds-class-card__studio-name">{studioName}</span>
        </div>
        {level && <Tag color={levelColor}>{level}</Tag>}
      </header>

      <h3 className="vds-class-card__title">{title}</h3>

      <div className="vds-class-card__meta">
        <span className="vds-class-card__meta-item">
          <Icon
            name="schedule"
            size={iconSize.md}
            weight={iconWeightForSize(iconSize.md)}
            aria-hidden="true"
          />
          <span>{startTime} às {endTime} · {duration}</span>
        </span>
        <span className="vds-class-card__meta-item">
          <Icon
            name="person"
            size={iconSize.md}
            weight={iconWeightForSize(iconSize.md)}
            aria-hidden="true"
          />
          <span>{instructor}</span>
        </span>
      </div>

      <div className="vds-class-card__capacity">
        <div className="vds-class-card__capacity-row">
          <span className="vds-class-card__capacity-label">Vagas preenchidas</span>
          <span className="vds-class-card__capacity-count">
            {capacityFilled}/{capacityTotal}
          </span>
        </div>
        <DotMeter total={capacityTotal} filled={capacityFilled} />
      </div>

      <Button
        variant="green"
        size="3xl"
        fullWidth
        disabled={capacityFilled >= capacityTotal}
        onClick={onCheckIn}
      >
        {ctaLabel}
      </Button>
    </Card>
  );
}
