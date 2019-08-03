// tslint:disable-next-line:variable-name
export const icons_and_fields = [
    {
        id: 1,
        name: 'Header',
        subName: 'Format',
        icon: 'header.png',
        fielType: 'header',
        tooltip: 'The first thing your users will see.',
        label: 'Enter Your Heading',
        type: 'text',
        handle: true

    },

    {
        id: 2,
        name: 'Text',
        subName: 'Format',
        icon: 'short_text.png',
        fielType: 'shortText',
        required: true,
        tooltip: 'Good for short answers, like names.',
        label: 'Enter your Discription here',
        placeholder: 'Short Answer Text',
        errorText: 'maximum 256 charector are allowed',
        min: 1,
        max: 256,
        handle: true


    },

    {
        id: 3,
        name: 'Statement',
        subName: 'Format',
        icon: 'statement.png',
        fielType: 'statement',
        tooltip: 'say to your users without asking for a response.',
        label: 'Enter your Statement here',
        type: 'text',
        handle: true

    },

    {
        id: 4,
        name: 'Phone',
        subName: 'Number',
        icon: 'mobile_no.png',
        fielType: 'phone',
        required: true,
        tooltip: 'Ask for a phone number with a right format.',
        errorText: 'Custom Error Field',
        type: 'text',
        label: 'Enter Your Phone',

        placeholder: 'Enter your phone number',
        inputValue: '',
        regex: '[789][0-9]{9}',
        handle: true
    },

    {
        id: 5,
        name: 'Picture',
        subName: 'Choice',
        icon: 'picture_format.png',
        fielType: 'picture',
        required: true,
        label: 'Select the picture',
        tooltip: 'Give your users image option to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Option 1',
                value: 'option-1',
              img: '',
            },
            {
                label: 'Option 2',
                value: 'option-2',
                img: '',
            }
        ]
    },

    {
        id: 6,
        name: 'Email',
        subName: 'Format',
        icon: 'mail.png',
        fielType: 'email',
        required: true,
        tooltip: 'Ask for a email address.',
        type: 'email',

        label: 'Email',
        inputValue: '',
        placeholder: 'Enter your email',
        regex: '^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$',
        errorText: 'Please enter a valid email',
        handle: true
    },

    {
        id: 7,
        name: 'Dropdown',
        subName: 'Format',
        icon: 'dropdown.png',
        fielType: 'dropdown',
        required: true,
        label: ' enter quetion for  selection',
        tooltip: 'Provide a list of options to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Option 1',
                value: 'option-1'
            },
            {
                label: 'Option 2',
                value: 'option-2'
            }
        ]
    },

    {
        id: 8,
        name: 'File Upload',
        subName: 'Format',
        icon: 'file_upload.png',
        fielType: '',
        label: 'uploud your resume',
        required: true,
        tooltip: 'Ask for any type of file.',
        errorText: 'Custom Error Field',
    },

    {
        id: 9,
        name: 'Yes/No',
        subName: 'Format',
        icon: 'yes_no.png',
        fielType: 'yesNo',
        required: true,
        tooltip: 'Give your users just three options.',
        errorText: 'Custom Error Field',
        label: 'Are you married ?',
        inputValue: '',
        values: ['Yes', 'No'],
    },

    {
        id: 10,
        name: 'Payment',
        subName: 'Format',
        icon: 'payment.png',
        fielType: '',
        required: true,
        tooltip: '',
        errorText: 'Custom Error Field',
    },
    {
        id: 11,
        name: 'True/False',
        subName: 'Format',
        icon: 'true_false.png',
        fielType: 'trueFalse',
        required: true,
        tooltip: 'Ask your users is it true or not.',
        errorText: 'Custom Error Field',
        label: 'Are you married ?',
        inputValue: '',
        values: ['True', 'False'],

    },

    {
        id: 12,
        name: 'Multiple',
        subName: 'Choie',
        icon: 'multiple_choice.png',
        fielType: 'multiple',
        required: true,
        label: 'Enter question for multiselection',
        tooltip: 'Give your audience options to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Option 1',
                value: 'option-1'
            },
            {
                label: 'Option 2',
                value: 'option-2'
            }
        ]
    },

    {
        id: 13,
        name: 'Rating',
        subName: 'Scale',
        icon: 'rating.png',
        fielType: '',
        required: true,
        label: 'Rate our product',
        tooltip: 'Ask them to rate something.',
        errorText: 'Custom Error Field',
    },

    {
        id: 14,
        name: 'Number',
        subName: 'Format',
        icon: 'Number.png',
        fielType: 'number',
        required: true,
        tooltip: 'Good for long answers, like the meaning of life',
        errorText: 'Custom Error Field',
        label: 'Enter your amount in number here',
        placeholder: 'Long Answer Text',
        min: 0,
        max: 256,
        handle: true

    },

    {
        id: 15,
        name: 'Website',
        subName: 'Format',
        icon: 'website.png',
        fielType: 'website',
        required: true,
        tooltip: 'Ask your audience to share a link.',
        errorText: 'Custom Error Field',
        type: 'url',

        label: 'Enter your website Link here',
        inputValue: '',
        placeholder: 'Enter your website link',
        // regex: '^[\da-fA-F]{2}([-:])([\da-fA-F]{2}\1){4}[\da-fA-F]{2}',
        handle: true
    },

    {
        id: 16,
        name: 'Date',
        subName: 'Format',
        type: 'date',
        icon: 'date.png',
        fielType: 'date',
        required: true,
        label: 'How old are you ?',

        tooltip: 'Only accepts answers as calendar dates.',
        errorText: 'Custom Error Field',
        placeholder: 'Date',
        className: 'form-control'
    },

    {
        id: 17,
        name: 'Footer',
        subName: 'Format',
        icon: 'footer.png',
        fielType: 'footer',
        tooltip: '',
        errorText: 'Custom Error Field',
        type: 'text',
        label: 'footer content',
        handle: true

    },

    {
        id: 18,
        name: 'Conditional',
        subName: 'Dropdown',
        icon: 'conditional_dropdown.png',
        fielType: 'conditional',
        required: true,
        tooltip: 'Ask your users the question depending on other answers.',
        label: 'Ask your users the question depending on other answers.',
    },


    {
        id: 19,
        name: 'Table',
        subName: 'Format',
        icon: 'table.png',
        fielType: 'table',
        required: true,
        tooltip: '',
        label: 'Enter Footer contain',
        errorText: 'Custom Error Field',
    },





];
