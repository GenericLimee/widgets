import Link from 'next/link';

export default function Nav({
  className,
  linkClassName,
  links
}: {
  className?: string,
  linkClassName?: string,
  links: {
    label: string,
    href: string,
    className?: string
  }[]
}) {

  return (
    <div className={className ?? ""}>
      {links.map((link, i) => 
        <Link 
          className={link.className ?? linkClassName}
          href={link.href} 
          key={link.href + i}
        >
          {link.label}
        </Link>
      )}
    </div>
  );
}