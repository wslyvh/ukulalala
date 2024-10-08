interface Props {
    className?: string
}

export function Newsletter(props: Props) {
    let className = 'flex flex-col gap-4 items-center'
    if (props.className) className += ` ${props.className}`

    return <>
        <div className={className}>
            <p>Receive new exercises directly in your inbox</p>
            <form className='flex flex-col gap-4 md:flex-row' target="_blank" method="post"
                action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4Mzk2NTA3LCJhZGRyZXNzX2Jvb2tfaWQiOjc5NjcxMiwibGFuZyI6ImVuIn0=">            
                    <input className='input input-bordered input-sm w-72' name="email" type="email" placeholder='Enter your email..' required />
                    <input type="hidden" name="sender" value="d2VzbGV5QHc1Lmdn" />
                    <input type="hidden" name="name" value="" />
                    <button className='btn btn-primary btn-sm w-72'>Subscribe</button>            
            </form>
        </div>
    </>
}