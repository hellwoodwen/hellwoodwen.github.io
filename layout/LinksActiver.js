import { useRouter } from "next/router"
import Link from "next/link"

export default function ActiveLink({ href , children }) {
  const router = useRouter()
  const style = router.pathname === href ? "actual" : ""
  return <Link href={href}><a className={style}>{children}</a></Link>
}
