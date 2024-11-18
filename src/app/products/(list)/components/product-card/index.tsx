import { type HTMLAttributes } from 'react'
import { ProductListItem } from '@/schemas/product'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/rating-stars'
import Link from 'next/link'

export interface ProductCardProps {
  product: ProductListItem
}

export function ProductCard({
  className,
  product,
  ...props
}: ProductCardProps & HTMLAttributes<HTMLDivElement>) {
  const {
    id,
    price,
    rating,
    tags,
    stock,
    title,
    thumbnail,
    discountPercentage,
  } = product

  return (
    <main className={cn(className)} {...props}>
      <figure className={'relative w-full'}>
        {/* Linking the product card to the product details page */}
        <Link
          href={`/products/${id}`}
          className={
            'mb-5 inline-block w-full overflow-hidden rounded-2xl border'
          }
        >
          <Image
            className={'w-full transition-transform hover:scale-110'}
            width={600}
            height={600}
            src={thumbnail}
            key={id}
            alt={title}
          />
        </Link>
        <figcaption className={'space-y-1'}>
          {/* Displaying sale badge if discount is present */}
          {discountPercentage && (
            <div className="absolute left-5 top-5 font-bold text-red-500">
              <Badge variant={'destructive'}>{discountPercentage}% Sale</Badge>
            </div>
          )}
          {/* Tags */}
          <div className={'flex flex-wrap items-center gap-1'}>
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          {/* Title */}
          <h3 className={'text-xl'}>{title}</h3>
          {/* Price and Stock */}
          <div className={'flex items-center gap-4'}>
            <p className="text-lg font-semibold">{price}$</p>
          </div>
          {/* Rating */}
          <RatingStars rating={rating} />
          {/* Stock Information */}
          <p className={'italic text-gray-500'}>Only {stock} remains</p>
        </figcaption>
      </figure>
    </main>
  )
}
