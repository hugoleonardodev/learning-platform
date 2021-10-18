/* eslint-disable no-console */
import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Asserts } from 'yup'

import emailSchema from 'common/validators/schemas'

import LinkMaterial from 'components/atoms/LinkMaterial'
import ButtonMaterial from 'components/atoms/ButtonMaterial'

import { RootStateWithReducers } from 'store/constants/ _rootReducerTypes'

import mdcRunWorksPageScripts from './WorksPageMDC'

type TFormData = Asserts<typeof emailSchema>

const WorksPage: React.FC = () => {
    const { register, formState, handleSubmit } = useForm<TFormData>({
        mode: 'all',
        resolver: yupResolver(emailSchema),
    })

    const { errors, dirtyFields } = formState

    const hasErrorOnStep = !!errors.email
    const fieldStepDirty = dirtyFields.email

    console.log('hasErrorOnStep', hasErrorOnStep)
    console.log('fieldStepDirty', fieldStepDirty)

    const onSubmit = (data: TFormData) => console.log(data)

    React.useEffect(() => {
        mdcRunWorksPageScripts()
    }, [])

    const MAX_ONE_THOUSAND = 1000

    const position = Math.ceil(Math.random() * MAX_ONE_THOUSAND)

    const quotes = useSelector((state: RootStateWithReducers) => state.quotes.data)

    return (
        <section>
            <div>
                {quotes ? (
                    <div className="fetched-data" data-testid="quote">
                        <h2>{quotes[position].text}</h2>
                        <h5>{quotes[position].author}</h5>
                        <p>
                            If you see this quote,
                            <LinkMaterial type="outter" href="https://axios-http.com/docs/intro" to="">
                                axios
                            </LinkMaterial>
                            is fetching data <br /> and
                            <LinkMaterial type="outter" href="https://github.com/reduxjs/redux-thunk" to="">
                                redux-thunk
                            </LinkMaterial>
                            is handling async action with <br />
                            <LinkMaterial
                                type="outter"
                                href="https://redux.js.org/tutorials/typescript-quick-start"
                                to=""
                            >
                                redux
                            </LinkMaterial>
                            to manage store data
                        </p>
                    </div>
                ) : (
                    <h6>loading...</h6>
                )}
                <div>
                    <p>Trust me,</p>
                    <p> Routing is working!</p>
                    <LinkMaterial type="outter" href="https://reactrouter.com/web/guides/quick-start" to="">
                        react-router-dom
                    </LinkMaterial>
                </div>

                {/* Sample React Hook Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="mdc-text-field mdc-text-field--filled">
                        <span className="mdc-text-field__ripple"></span>
                        <span className="mdc-floating-label" id="my-label-id">
                            Email
                        </span>
                        <input
                            className="mdc-text-field__input"
                            type="text"
                            aria-labelledby="my-label-id"
                            aria-controls="my-helper-id"
                            aria-describedby="my-helper-id"
                            {...register('email')}
                        />
                        {/* Will show the trailing icon on input filed if it has an error  */}
                        {hasErrorOnStep && (
                            <i
                                className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
                                tabIndex={0}
                                role="button"
                            >
                                event
                            </i>
                        )}
                        <span className="mdc-line-ripple"></span>
                    </label>

                    <div className="mdc-text-field-helper-line">
                        <div className="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true">
                            helper text
                        </div>
                    </div>

                    <button type="submit">submit</button>
                </form>

                <LinkMaterial type="inner" to="/">
                    <ButtonMaterial isRipple>Back to Home</ButtonMaterial>
                </LinkMaterial>
            </div>
        </section>
    )
}

export default WorksPage
