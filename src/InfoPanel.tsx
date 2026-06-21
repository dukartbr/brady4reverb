import type { PanelItem } from './App'

function calculatePanelOpen(position: number, id: number) {
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
		}
}

export default function InfoPanel({position, items}: {position: number, items: PanelItem[]}) {

	return (
		<div className="infoContainer">
			<h2 className="infoTitle">Technical Skills</h2>
			{items.map(s => {
				return (
					<div key={s.id} className="infoDropDownHeader">
						<div style={{display: 'flex', justifyContent: 'space-between'}}>
							<span>{s.title}</span>
							{s.years && (
								<span>{s.years} years</span>
							)}
						</div>
						{calculatePanelOpen(position, s.id) && (
							<p className="infoDropDownDescription">{s.description}</p>
						)}
					</div>
				)
			})}
		</div>
	)
}
