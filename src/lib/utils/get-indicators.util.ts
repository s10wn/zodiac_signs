import { ClosedIndicator } from "@/types/closed-indicators.type";
import { FullIndicator, Indicator } from "@/types/indicator.type";

export type GetIndicatorsReturn = {
    indicators: Indicator[];
    closedIndicators: ClosedIndicator[];
}

export const getIndicators = ({indicators, closedIndicators}: GetIndicatorsReturn): FullIndicator[] => {
    const closedIndicatorIds = closedIndicators.map(closedIndicator => closedIndicator.indicator_id);

    return indicators.map(indicator => ({
        ...indicator,
        isClosed: closedIndicatorIds.includes(indicator.id)
    }))
}