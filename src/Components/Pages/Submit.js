import React, { useRef } from 'react'
import { Container, Form } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
const Submit = () => {
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
  return (
    <div className='submit' onLoad={()=>{toast.warning("Work is on Progress...")}}>
        <ToastContainer position='top-center' />
        <NavbarMenu />
        <Container className='email-template'>
            <Form>
                <Form.Group className='mb-2'>
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>To</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Cc</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Editor
                    apiKey='ru49dfoaikbq4wfagwpdj8xzwi0pxbkwyre28606w2hlfayb'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <button className='btn btn-primary' onClick={log}><i className='fa fa-arrow-right me-2'></i>Send</button>
            </Form>
        </Container>
        <Sidebar />
    </div>
  )
}

export default Submit