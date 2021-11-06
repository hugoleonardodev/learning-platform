import React from 'react'
import { EditorContentProps } from '@tiptap/react'

import {
    TeacherFeedbackButtonGroup,
    TeacherFeedbackMenuButton,
    TeacherFeedbackMenuButtonClearMobile,
} from './factory.styles'

import { ReactComponent as BoldIcon } from 'common/assets/bold.svg'
import { ReactComponent as ItalicIcon } from 'common/assets/italic.svg'
import { ReactComponent as StrikeIcon } from 'common/assets/strike.svg'
import { ReactComponent as BulletListIcon } from 'common/assets/bullet_list.svg'
import { ReactComponent as OrderedListIcon } from 'common/assets/ordered_list.svg'
import { ReactComponent as UndoIcon } from 'common/assets/undo.svg'
import { ReactComponent as RedoIcon } from 'common/assets/redo.svg'
import { ReactComponent as ClearIcon } from 'common/assets/clear.svg'

export const BoldItalicUnderline: React.FC<EditorContentProps> = ({ editor }) => {
    if (!editor) {
        return null
    }
    return (
        <TeacherFeedbackButtonGroup>
            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <BoldIcon />
            </TeacherFeedbackMenuButton>

            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <ItalicIcon />
            </TeacherFeedbackMenuButton>

            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <StrikeIcon />
            </TeacherFeedbackMenuButton>

            <TeacherFeedbackMenuButtonClearMobile
                onClick={() => editor.chain().focus().clearContent().run()}
                isclearbutton={'true'}
            >
                <ClearIcon />
            </TeacherFeedbackMenuButtonClearMobile>
        </TeacherFeedbackButtonGroup>
    )
}

export const OrderedAndUnorderedLists: React.FC<EditorContentProps> = ({ editor }) => {
    if (!editor) {
        return null
    }
    return (
        <TeacherFeedbackButtonGroup>
            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                <BulletListIcon />
            </TeacherFeedbackMenuButton>

            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                <OrderedListIcon />
            </TeacherFeedbackMenuButton>
        </TeacherFeedbackButtonGroup>
    )
}

export const UndoAndRedo: React.FC<EditorContentProps> = ({ editor }) => {
    if (!editor) {
        return null
    }
    return (
        <TeacherFeedbackButtonGroup>
            <TeacherFeedbackMenuButton onClick={() => editor.chain().focus().undo().run()}>
                <UndoIcon />
            </TeacherFeedbackMenuButton>

            <TeacherFeedbackMenuButton onClick={() => editor.chain().focus().redo().run()}>
                <RedoIcon />
            </TeacherFeedbackMenuButton>
        </TeacherFeedbackButtonGroup>
    )
}

export const TextOptions: React.FC<EditorContentProps> = ({ editor }) => {
    if (!editor) {
        return null
    }
    return (
        <TeacherFeedbackButtonGroup>
            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                h1
            </TeacherFeedbackMenuButton>

            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                h2
            </TeacherFeedbackMenuButton>

            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                h3
            </TeacherFeedbackMenuButton>

            <TeacherFeedbackMenuButton
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                P
            </TeacherFeedbackMenuButton>
        </TeacherFeedbackButtonGroup>
    )
}
