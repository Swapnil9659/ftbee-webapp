import React,  {useRef, useMemo}  from 'react';
import JoditEditor from 'jodit-react'

const textEditor = (props) => {
 //contents is the dynamic value from parent
 const { contents, getValue } = props
 const editor = useRef(null)
 const config = {}

 return useMemo(() => (
    <div>
        <JoditEditor ref={editor} value={contents} config={config} onChange={content => getValue(content)} />
    </div>
    ), [])
}

export default textEditor