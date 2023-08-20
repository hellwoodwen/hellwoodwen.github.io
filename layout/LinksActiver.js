import { useRouter } from "next/router"
import Link from "next/link"

export default function ActiveLink({ href , children }) {
  const router = useRouter()
  const style = router.pathname === href ? "actual" : ""
  console.log("route: "+router.pathname+" href: "+href)
  return <Link href={href}><a className={style}>{children}</a></Link>
}
