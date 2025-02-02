
import Link from "next/link"

interface NewsProps {
  author: string;
  date: string;
  readingTime: string;
  title: string;
  content: string;
  image: string;
  url: string;
  width?: string;
  height?: string;
}

export function News(
 { author, 
  date, 
  readingTime, 
  title, 
  content, 
  image, 
  url, 
  width = '100%', 
  height = 'auto' }:NewsProps
) {
  return (
    <article className="bg-background rounded-lg shadow-lg overflow-hidden" style={{ width }}>
      <div className="relative" style={{ height }}>
        <div className="absolute top-4 left-4 z-10 inline-block rounded-lg bg-muted px-3 py-1 text-sm">News</div>
        <img
          src={image}
          alt="Article Image"
          className="w-full h-full object-cover"
          style={{ aspectRatio: "1200/600", height: '100%' }}
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-4 space-x-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <UserIcon className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <CalendarIcon className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <ClockIcon className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground mb-6 text-m">
          {content}
        </p>
        <Link
          href={url}
          className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

function CalendarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
