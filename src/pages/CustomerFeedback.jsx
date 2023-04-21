import React from 'react'
import './CustomerFeedback.css'
import { Mention, MentionsInput } from 'react-mentions';
import mentionsInputStyle from '../utils/mentionsInputStyle'
import FeedbackCard from '../widgets/FeedbackCard'

function CustomerFeedback() {
    	const [formState, setFormState] = React.useState({
		username: '',
		comment: '',
	});

    const users = [
		{
			id: 'isaac',
			display: 'Isaac Newton',
		},
		{
			id: 'sam',
			display: 'Sam Victor',
		},
		{
			id: 'emma',
			display: 'emmanuel',
		},
	];

  return (
    <div className='CustomerFeedback'>
        <MentionsInput
					placeholder="Add Comment. Use '@' for mention and '&' for emojis"
					value={formState.comment}
					onChange={(e) =>
						setFormState({ ...formState, comment: e.target.value })
					}
					style={mentionsInputStyle}
					// a11ySuggestionsListLabel={'Suggested mentions'}
				>
					<Mention
                    // trigger="@" 
                    style={{background:'#cee4e5'}} 
                    data={users}
                     />
				</MentionsInput>

			<FeedbackCard />
    </div>
  )
}

export default CustomerFeedback