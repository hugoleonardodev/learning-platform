import { useEditor, EditorContent, EditorContentProps } from '@tiptap/react'
import React from 'react'
import StarterKit from '@tiptap/starter-kit'

import {
    TeacherFeedbackButtonsToolbar,
    TeacherFeedbackContainer,
    TeacherFeedbackMenuButton,
    TeacherFeedbackSubmitButton,
} from './factory.styles'

import { BoldItalicUnderline, OrderedAndUnorderedLists, TextOptions, UndoAndRedo } from './ButtonGroups'

import { ReactComponent as ClearIcon } from 'common/assets/clear.svg'
import { useDispatch, useSelector } from 'react-redux'
import { teacherSubmitFeedback } from 'store/actions/teachersActions'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const MenuBar: React.FC<EditorContentProps> = ({ editor }) => {
    if (!editor) {
        return null
    }

    return (
        <TeacherFeedbackButtonsToolbar>
            <BoldItalicUnderline editor={editor} />

            <TextOptions editor={editor} />

            <OrderedAndUnorderedLists editor={editor} />

            <UndoAndRedo editor={editor} />

            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().clearContent().run()}
                isclearbutton={'true'}
            >
                <ClearIcon />
            </TeacherFeedbackMenuButton>
        </TeacherFeedbackButtonsToolbar>
    )
}

const TeacherFeedback: React.FC = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Olá Time To Play,</p>',
    })

    const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true)

    const [isTextAreaDisabled, setIsTextAreaDisabled] = React.useState(false)

    const textContainer = document.querySelector('.ProseMirror')

    if (textContainer) {
        // user must click on feedback text area and hit enter key in order to active the submit button
        textContainer.addEventListener('click', () => {
            // after click user must hit the enter key
            textContainer.addEventListener('keyup', (event: KeyboardEvent) => {
                // Number 13 is the "Enter" key on the keyboard
                if (event.key === 'Enter' || event.key === 'Backspace') {
                    // Cancel the default action, if needed
                    event.preventDefault()
                    // activate submit button
                    setIsSubmitDisabled(false)
                }
            })
        })
    }

    const dispatch = useDispatch()

    const handleSubmitFeedback = () => {
        if (textContainer) {
            const textContent = textContainer.innerHTML
            dispatch(teacherSubmitFeedback(textContent))
            setIsTextAreaDisabled(true)
            setIsSubmitDisabled(true)
        }
    }

    const teacherFeedback = useSelector((state: RootStateWithReducers) => state.teachers.teacherFeedback)

    return (
        <TeacherFeedbackContainer>
            {isTextAreaDisabled ? (
                <div>Agradecemos o feedback!</div>
            ) : (
                <>
                    <MenuBar editor={editor} />
                    <EditorContent editor={editor} />
                    <TeacherFeedbackSubmitButton disabled={isSubmitDisabled} onClick={handleSubmitFeedback}>
                        Enviar Feedback
                    </TeacherFeedbackSubmitButton>
                </>
            )}
            {teacherFeedback !== '' && <div>Feedback recebido.</div>}
        </TeacherFeedbackContainer>
    )
}

export default TeacherFeedback
