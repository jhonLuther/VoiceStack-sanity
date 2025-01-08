import { useTracking } from 'cs-tracker'
import { getCssSelectorShort } from '~/helpers/createCSSSelector';
import { getParams } from '~/helpers/getQueryParams';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react'
import { getCookie } from '~/utils/tracker/cookie';

interface TrackerProps {
    /**
     * e_name;
     */
    name: string;
    /**
     *      event destination_url
     */
    destination?: string
    useSpan?: boolean
}

function Tracker({ useSpan = false, ...props }: PropsWithChildren<TrackerProps>) {
    const { trackEvent } = useTracking({}, {});
    const router = useRouter();
    const handleClick = (e: any) => {
        try {


            const element = getCssSelectorShort(e.target as Element);
            const {
                utm_source = null,
                utm_term = null,
                utm_content = null,
                utm_campaign = null,
                utm_medium = null,
                ...params
            } = getParams();
            const path = router.asPath.substring(1).split('#')[0];
            const name = path.replace(/[^\w\s-]/g, '-') + "-" + props.name;

            trackEvent({
                e_type: "click",
                e_name: name,
                e_time: new Date(),
                e_path: window?.location.href,
                utm_campaign,
                utm_content,
                utm_source,
                utm_term,
                utm_medium,
                element,
                user_segment:getCookie("__cs_vs"),
                url_params: params,
                current_path: window?.location.href,
                base_path: window.location.origin + window.location.pathname,
                domain: window.location.origin,
                destination_url: props.destination,
                referrer_url: window.document.referrer,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {useSpan === true ? <span onClick={(e) => handleClick(e)}>
                {props.children}
            </span > :
                <div onClick={(e) => handleClick(e)}>
                    {props.children}
                </div>
            }</>
    )
}

export default Tracker