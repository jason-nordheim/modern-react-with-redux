import React, { useState } from 'react';

const LANGUAGES = [
	{ label: 'Afrikaans', value: 'af' },
	{ label: 'Arabic', value: 'ar' },
	{ label: 'French', value: 'fr' },
	{ label: 'Hindi', value: 'hi' },
	{ label: 'Japanese', value: 'ja' },
	{ label: 'Portuguese', value: 'pt' },
	{ label: 'Russian', value: 'ru' },
	{ label: 'Simplified Chinese', value: 'zh-CN' },
	{ label: 'Spanish', value: 'es' },
	{ label: 'Swahili', value: 'sw' },
	{ label: 'Thai', value: 'th' }
];

export default ({ language, onLanguageChange }) => {
	// default to spanish
	if (language === undefined) language = 'es';

	// setup
	const languageConfig = LANGUAGES.find((l) => l.value === language);
	if (!languageConfig) throw new Error(`Unknown language code '${language}'`);

	// state
	const [ open, setOpen ] = useState(false);

	// event handlers
	const onSelect = (language) => {
		setOpen(false);
		onLanguageChange(language);
	};

	// jsx
	return (
		<div>
			<label>Select Langauge</label>
			<div className={`langauge__dropdown ${open && 'langauge__is-active'}`}>
				<div className='langauge__dropdown-trigger'>
					<button className='button' onClick={() => setOpen(!open)}>
						<span>{languageConfig.label}</span>
						<span className='icon is-small'>
							<i className='fas fa-angle-down' />
						</span>
					</button>
				</div>
			</div>
			<div className='langauge__dropdown_menu'>
				<div className='langauge__dropdown_content'>
					{LANGUAGES.map(({ label, value }) => (
						<a className='langauge__dropdown-item' href='#' onClick={() => onSelect(value)}>
							{label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
