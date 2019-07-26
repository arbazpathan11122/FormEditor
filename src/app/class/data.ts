export const icons_and_fields = [
        {
            id: 1,
            name: 'Header',
            subName: 'Format',
            icon: 'header.png'
        },

        {
            id: 2,
            name: 'Short text',
            subName: 'Format',
            icon: 'short_text.png'
        },

        {
            id: 3,
            name: 'Statement',
            subName: 'Format',
            icon: 'statement.png'
        },

        {
            id: 4,
            name: 'Phone',
            subName: 'Number',
            icon: 'mobile_no.png',
            type: 'phone',
            label: 'Phone',
            description: 'Enter your phone',
            placeholder: 'Enter your phone',
            className: 'form-control',
            subtype: 'text',
            regex: '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$',
            errorText: 'Please enter a valid phone number',
            handle: true
        },

        {
            id: 5,
            name: 'Picture',
            subName: 'Choice',
            icon: 'picture_format.png'
        },

        {
            id: 6,
            name: 'Email',
            subName: 'Format',
            icon: 'mail.png',
            type: 'email',
            required: true,
            label: 'Email',
            description: 'Enter your email',
            placeholder: 'Enter your email',
            className: 'form-control',
            subtype: 'text',
            regex: '^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$',
            errorText: 'Please enter a valid email',
            handle: true
        },

        {
            id: 7,
            name: 'Dropdown',
            subName: 'Format',
            icon: 'dropdown.png'
        },

        {
            id: 8,
            name: 'File Upload',
            subName: 'Format',
            icon: 'file_upload.png'
        },

        {
            id: 9,
            name: 'Yes/No',
            subName: 'Format',
            icon: 'yes_no.png'
        },

        {
            id: 10,
            name: 'Payment',
            subName: 'Format',
            icon: 'payment.png'
        },
        {
            id: 11,
            name: 'True/False',
            subName: 'Format',
            icon: 'true_false.png'
        },

        {
            id: 12,
            name: 'Multiple',
            subName: 'Choie',
            icon: 'multiple_choice.png'
        },

        {
            id: 13,
            name: 'Rating',
            subName: 'Scale',
            icon: 'rating.png'
        },

        {
            id: 14,
            name: 'Long text',
            subName: 'Format',
            icon: 'long_text.png'
        },

        {
            id: 15,
            name: 'Website',
            subName: 'Format',
            icon: 'website.png'
        },

        {
            id: 16,
            name: 'Date',
            subName: 'Format',
            type: 'date',
            icon: 'date.png',
            placeholder: 'Date',
            className: 'form-control'
        },

        {
            id: 17,
            name: 'Footer',
            subName: 'Format',
            icon: 'footer.png'
        },

        {
            id: 18,
            name: 'Conditional',
            subName: 'Dropdown',
            icon: 'conditional_dropdown.png'
        },


        {
            id: 19,
            name: 'Table',
            subName: 'Format',
            icon: 'table.png'
        },





    ];
