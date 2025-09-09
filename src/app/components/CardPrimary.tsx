import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardPrimaryProps {
  cardTitle?: string;
  cardDescription?: string;
  cardContent?: string;
  cardFooter?: string;
}

export default function CardPrimary({
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
}: CardPrimaryProps) {
  return (
    <Card className="w-full">
      {(cardTitle || cardDescription) && (
        <CardHeader>
          {cardTitle && <CardTitle>{cardTitle}</CardTitle>}
          {cardDescription && (
            <CardDescription>{cardDescription}</CardDescription>
          )}
        </CardHeader>
      )}

      {cardContent && (
        <CardContent>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {cardContent}
          </p>
        </CardContent>
      )}
      {cardFooter && (
        <CardFooter>
          <p className="text-sm text-gray-500">{cardFooter}</p>
        </CardFooter>
      )}
    </Card>
  );
}
