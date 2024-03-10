import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Blog = ({ blogData }) => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { imageUrl, heading,subheading, initialParagraph, initialParagraph1, initialParagraph2, questions, endingParagraph } = blogData;
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div className='font-lexend'>
            <div onClick={handleClickOpen('paper')}>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center relative my-10 w-[800px] max-w-[80vw] mx-auto font-lexend cursor-pointer ml-5">
                    <div className="relative h-80">
                        <img src={imageUrl} alt="Image" className="object-cover w-full h-full rounded-t-lg" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold py-2">{heading}</h2>
                    <h3 className='text-lg md:text-xl  pb-1 '>{subheading}</h3>
                    <p className="text-gray-700 md:text-lg pb-3">{initialParagraph}</p>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                maxWidth="md"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                {/* <DialogTitle id="scroll-dialog-title">Blog</DialogTitle> */}
                <DialogContent dividers={scroll === 'paper'}>
                <div className="relative h-80">
          <img src={imageUrl} alt="Image" className="object-cover w-full h-full rounded-t-lg" />
        </div>
            <h2 className="text-2xl md:text-3xl font-bold py-4 ">{heading}</h2>
            <h3 className='text-lg md:text-xl  pb-1 '>{subheading}</h3>
            <p className="text-gray-700 md:text-lg pb-3">{initialParagraph}</p>
            <p className="text-gray-700 md:text-lg pb-3">{initialParagraph1}</p>
            <p className="text-gray-700 md:text-lg pb-3">{initialParagraph2}</p>
            {questions.map((question, index) => (
              <div key={index}>
                <h1 className="text-lg md:text-xl font-medium">{question.question}</h1>
                <p className="text-gray-700 md:text-lg pb-3">{question.answer}</p>
              </div>
            ))}
            <p className="text-gray-700 md:text-lg pb-3">{endingParagraph}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Blog;