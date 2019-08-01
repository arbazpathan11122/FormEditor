// tslint:disable-next-line:variable-name
export const icons_and_fields = [
    {
        id: 1,
        name: 'Header',
        subName: 'Format',
        icon: 'header.png',
        fielType: 'header',
        label: 'Enter Your Heading',
        type: 'text',
        handle: true

    },

    {
        id: 2,
        name: 'Short text',
        subName: 'Format',
        icon: 'short_text.png',
        fielType: 'shortText',
        value: 'Enter your Discription here',
        placeholder: 'Short Answer Text',

        min: 0,
        max: 256,
        handle: true


    },

    {
        id: 3,
        name: 'Statement',
        subName: 'Format',
        icon: 'statement.png',
        fielType: 'statement',
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
        type: 'text',
        label: 'Enter Your Phone',
        required: true,
        placeholder: 'Enter your phone number',
        inputValue: '',
        regex: '[789][0-9]{9}',
        errorText: 'Please enter a valid phone number',
        handle: true
    },

    {
        id: 5,
        name: 'Picture',
        subName: 'Choice',
        icon: 'picture_format.png',
        fielType: '',
    },

    {
        id: 6,
        name: 'Email',
        subName: 'Format',
        icon: 'mail.png',
        fielType: 'email',
        type: 'email',
        required: true,
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
        fielType: '',
    },

    {
        id: 8,
        name: 'File Upload',
        subName: 'Format',
        icon: 'file_upload.png',
        fielType: '',
    },

    {
        id: 9,
        name: 'Yes/No',
        subName: 'Format',
        icon: 'yes_no.png',
        fielType: 'yesNo',
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
    },
    {
        id: 11,
        name: 'True/False',
        subName: 'Format',
        icon: 'true_false.png',
        fielType: 'trueFalse',
        label: 'Are you married ?',
        inputValue: '',
        values: ['True', 'False'],

    },

    {
        id: 12,
        name: 'Multiple',
        subName: 'Choie',
        icon: 'multiple_choice.png',
        fielType: '',
    },

    {
        id: 13,
        name: 'Rating',
        subName: 'Scale',
        icon: 'rating.png',
        fielType: '',
    },

    {
        id: 14,
        name: 'Long text',
        subName: 'Format',
        icon: 'long_text.png',
        fielType: 'longText',
        value: 'Enter your Discription here',
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
        type: 'url',
        required: true,
        label: 'Enter your website Link here',
        inputValue: '',
        placeholder: 'Enter your website link',
        // regex: '^[\da-fA-F]{2}([-:])([\da-fA-F]{2}\1){4}[\da-fA-F]{2}',
        errorText: 'Please enter a valid email',
        handle: true
    },

    {
        id: 16,
        name: 'Date',
        subName: 'Format',
        type: 'date',
        icon: 'date.png',
        fielType: '',
        placeholder: 'Date',
        className: 'form-control'
    },

    {
        id: 17,
        name: 'Footer',
        subName: 'Format',
        icon: 'footer.png',
        fielType: 'footer',
        type: 'text',
        label: 'footer content',
        handle: true

    },

    {
        id: 18,
        name: 'Conditional',
        subName: 'Dropdown',
        icon: 'conditional_dropdown.png',
        fielType: '',
    },


    {
        id: 19,
        name: 'Table',
        subName: 'Format',
        icon: 'table.png',
        fielType: '',
    },





];
