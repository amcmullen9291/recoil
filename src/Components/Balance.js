import React from 'react'
import { useRecoilValue } from 'recoil'
import { balanceState } from '../Recoil/Selectors'

export const Balance = () => {
    const balance = useRecoilValue(balanceState)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>{balance}</h1>
        </>
    )
}