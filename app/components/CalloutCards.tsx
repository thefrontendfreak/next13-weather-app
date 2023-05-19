"use client"

import { FaCheckCircle, FaMinusCircle } from "react-icons/fa";
import { Callout } from '@tremor/react'

type Props = {
    message: string,
    warning?: boolean
}

const CallOutCards = ({ message, warning }: Props) => {
    return (
        <Callout
            className="mt-4"
            title={message}
            icon={warning ? FaMinusCircle : FaCheckCircle}
            color={warning ? "rose" : "teal"}
        />
    )
}

export default CallOutCards