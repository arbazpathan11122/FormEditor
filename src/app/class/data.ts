// tslint:disable-next-line:variable-name
export const icons_and_fields = [
    {
        id: 1,
        uniqName: 'Header',
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
        id: 17,
        uniqName: 'Footer',
        name: 'Footer',
        subName: 'Format',
        icon: 'footer.png',
        fielType: 'footer',
        tooltip: 'The last thing your users will see.',
        type: 'text',
        label: 'footer content',
        handle: true

    },

    {
        id: 2,
        uniqName: 'Text',
        name: 'Text',
        subName: 'Format',
        icon: 'short_text.png',
        fielType: 'text',
        required: true,
        tooltip: 'Good for short answers, like names.',
        label: 'Enter your Question here',
        placeholder: ' Answer Text',
        errorText: 'maximum 256 charector are allowed',
        min: 0,
        max: 256,
        handle: true,
        selestedValidation: '',
        formValidations: [
            {
                label: ' Greater Then',
                value: 'min'
            },
            {
                label: ' Less Then',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ]


    },
    {
        id: 14,
        uniqName: 'Number',
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
        selestedValidation: '',
        formValidations: [
            {
                label: ' Greater Then',
                value: 'min'
            },
            {
                label: ' Less Then',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ],


        handle: true

    },
    {
        id: 3,
        uniqName: 'Statement',
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
        id: 6,
        uniqName: 'Email',
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
        errorText: 'Please enter a valid email',
        selestedValidation: '',
        handle: true,
        emailValidation: [
            {
                label: 'Gmail',
                pattern: '.+@Gmail.com',

            },
            {
                label: 'Outlook',
                pattern: '.+@Gmail.com',

            },
            {
                label: 'Yahoo',
                pattern: '.+@Gmail.com',

            },
            {
                label: 'Zoho',
                pattern: '.+@Gmail.com',

            },
            {
                label: 'Mail',
                pattern: '.+@Gmail.com',

            },
            {
                label: 'ProtonMail',
                pattern: '.+@Gmail.com',

            },
            {
                label: 'GMX',
                pattern: '.+@Gmail.com',

            },
        ]
    },

    {
        id: 16,
        uniqName: 'Date',
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
        selestedValidation: '',

        formValidations: [
            {
                label: 'After',
                value: 'min'
            },
            {
                label: ' Before',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ],
    },
    {
        id: 15,
        uniqName: 'Website',
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
        id: 4,
        uniqName: 'Phone',
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
        id: 8,
        uniqName: 'File Upload',
        name: 'File Upload',
        subName: 'Format',
        icon: 'file_upload.png',
        fielType: 'file',
        label: 'uploud your resume',
        required: true,
        tooltip: 'Ask for any type of file.',
        errorText: 'Custom Error Field',
        selestedValidation: '',

        formValidations: [
            {
                label: 'Kb',
                value: 'Kb'
            },
            {
                label: ' Mb',
                value: 'Mb'
            },
            {
                label: 'Gb',
                value: 'Gb'
            }
        ]

    },
    {
        id: 12,
        uniqName: 'Multiple Choie',
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
                label: 'Enter Your Option Here',
                value: 'option-2'
            },
            {
                label: 'Enter Your Option Here',
                value: 'option-2'
            }
        ],
        selestedValidation: '',
        formValidations: [

            {
                label: 'Select atleast',
                value: 'min'
            },
            {
                label: 'Select exectly',
                value: 'max'
            },
            {
                label: 'Select atmost',
                value: 'both'
            }

        ]
    },

    {
        id: 5,
        uniqName: 'Picture Choice',
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
                label: 'Enter Your Option Here',
                value: 'option-1',
                img: '',
            },
            {
                label: 'Enter Your Option Here',
                value: 'option-2',
                img: '',
            }
        ],
        selestedValidation: '',

        formValidations: [
            {
                label: 'Select atleast',
                value: 'min'
            },
            {
                label: 'Select exectly',
                value: 'max'
            },
            {
                label: 'Select atmost',
                value: 'both'
            }
        ],

    },


    {
        id: 7,
        uniqName: 'Dropdown',
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
                label: 'Enter Your Option Here',
                value: 'option-1'
            },
            {
                label: 'Enter Your Option Here',
                value: 'option-2'
            }
        ],
        selestedValidation: '',

        formValidations: [
            {
                label: 'Select atleast',
                value: 'min'
            },
            {
                label: 'Select exectly',
                value: 'max'
            },
            {
                label: 'Select atmost',
                value: 'both'
            }]

    },
    // {
    //     id: 18,
    //     uniqName: 'Conditional Dropdown',
    //     name: 'Conditional',
    //     subName: 'Dropdown',
    //     icon: 'conditional_dropdown.png',
    //     fielType: 'conditional',
    //     required: true,
    //     tooltip: 'Ask your users the question depending on other answers.',
    //     label: 'Ask your users the question depending on other answers.',
    // },



    {
        id: 9,
        uniqName: 'Yes/No',
        name: 'Yes/No',
        subName: 'Format',
        icon: 'yes_no.png',
        fielType: 'yesNo',
        required: true,
        tooltip: 'Give your users just three options.',
        errorText: 'Custom Error Field',
        label: 'Are you married ?',
        inputValue: '',
        values: ['Yes', 'No', 'MayBe'],
    },

    // {
    //     id: 10,
    //     uniqName: 'Payment',
    //     name: 'Payment',
    //     subName: 'Format',
    //     icon: 'payment.png',
    //     fielType: '',
    //     required: true,
    //     tooltip: '',
    //     errorText: 'Custom Error Field',
    // },
    {
        id: 11,
        uniqName: 'True/False',
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
        id: 13,
        uniqName: 'Rating',
        name: 'Rating',
        subName: 'Scale',
        icon: 'rating.png',
        fielType: 'rating',
        required: true,
        label: 'Rate our product',
        tooltip: 'Ask them to rate something.',
        errorText: 'Custom Error Field',
        selestedValidation: 'fa fa-star-o',
        ratingLimit: 5,
        userComment: {
            want: false,
            comment: '',
        },
        formRating: [
            // 'fa fa-star-o', 'fa fa-smile-o', 'fa fa-sun-o', 'fa fa-heart-o', 'btn btn-light',

            {
                label: 'Star',
                value: 'fa fa-star-o'
            },
            {
                label: 'Smiley',
                value: 'fa fa-smile-o'
            },
            {
                label: 'Sun',
                value: 'fa fa-sun-o'
            },
            {
                label: 'Heart',
                value: 'fa fa-heart-o'
            },
            {
                label: 'Number',
                value: 'btn btn-light'
            }
        ],
    },








    // {
    //     id: 19,
    //     uniqName: 'Table',
    //     name: 'Table',
    //     subName: 'Format',
    //     icon: 'table.png',
    //     fielType: 'table',
    //     required: true,
    //     tooltip: '',
    //     label: 'Enter Footer contain',
    //     errorText: 'Custom Error Field',
    // },





];
