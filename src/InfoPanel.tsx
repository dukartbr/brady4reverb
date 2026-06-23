import type { PanelItem } from './App'

// I hate this thing so much
function calculatePanelOpen(position: number, id: number, count: number) {
		if (id == 0 && position < -100) {
			return true;
		} else if (id == 1 && position < -60 && position > -100) {
			return true;
		} else if (id == 2 && position < -20 && position > -60) {
			return true;
		} else if (id == 3 && position < 20 && position > -20) {
			return true;
		} else if (id == 4 && position < 60 && position > 20) {
			return true;
		} else if (id == 5 && position < 100 && position > 60) {
			return true;
		} else if (id == 6 && position > 100) {
			return true;
		} else if (id == count - 1 && position > 100) {
			return true;
		}
}

export default function InfoPanel({title, position, items}: {title: string, position: number, items: PanelItem[]}) {

	return (
		<div className="infoContainer">
			<h2 className="infoTitle">{title}</h2>
			{items.map(s => {
				return (
					<div key={s.id} className="infoDropDownHeader">
						<div style={{display: 'flex', justifyContent: 'space-between'}}>
							<span>{s.title}</span>
							{s.years && (
								<span>{s.years} years</span>
							)}
							{s.range && (
								<span>{s.range[0]}-{s.range[1]}</span>
							)}
							{s.grad && (
								<span>Graduated {s.grad}</span>
							)}
						</div>
						{calculatePanelOpen(position, s.id, items.length) && (
							<div className="infoDropDownDescription">
								{s.description && (
								<p>{s.description}</p>
								)}
								{s.list && (
									<div className="infoDropDownDescriptionList">
										{s.list.map(item => {
										if (item.link) {
											return (
												<a href={item.link} target="_blank" key={item.text}>
													{item.text}
												</a>
											)
										}
										return (
											<span>{item.text}</span>
										)
										})}
									</div>
								)}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
