import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const submitContactForm = createAsyncThunk(
    'contactForm/submitContactForm',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://example.domain/dev/v1/contact-us", formData)
            return response.data
        } catch (error) {
            return rejectWithValue(error?.response?.data)
        }
    }
)

const contactFormSlice = createSlice({
    name: "contactForm",
    initialState: {
        formData: {
            name: '',
            email: '',
            website_url: '',
            project_details: '',
        },
        loading: false,
        successMessage: '',
        errorMessage: '',
    },
    reducers: {
        setFormData: (state, action) => {
            state.formData = {
                ...state.formData, ...action.payload
            }
        },
        resetForm: (state) => {
            state.formData = {
                name: '',
                email: '',
                website_url: '',
                project_details: '',
            };
            state.successMessage = '';
            state.errorMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContactForm.pending, (state) => {
                state.loading = true;
                state.successMessage = '';
                state.errorMessage = '';
            })
            .addCase(submitContactForm.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = 'Your message has been sent successfully!';
            })
            .addCase(submitContactForm.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload || 'Failed to submit the form. Please try again.';
            });
    },
})

export const { setFormData, resetForm } = contactFormSlice.actions;

export default contactFormSlice.reducer;
