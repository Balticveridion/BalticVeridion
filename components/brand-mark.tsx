import Image from 'next/image'
import { cn } from '@/lib/utils'

export function BrandMark({
  className,
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <Image
      src={light ? '/brand/icon-white.svg' : '/brand/icon.svg'}
      alt=""
      width={128}
      height={128}
      className={cn('h-auto', className)}
    />
  )
}
