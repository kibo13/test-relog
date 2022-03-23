import React, { useState } from 'react'

// mocks
import apps from './mocks/apps.json'
import clients from './mocks/clients.json'

// components
import List from './components/List.jsx'
import Map from './components/Map.jsx'

const App = () => {
    const [count, setCount] = useState(50)

    const uploadMoreData = () => setCount(count + 50)

    return (
        <div className="content">
            <div className="apps-block">
                <div className="apps-control">
                    <p className="text-bold">Количество заявок: {apps.slice(0, count).length}</p>
                    {apps.length >= count ? (
                        <button className="apps-upload" onClick={uploadMoreData}>
                            Показать больше
                        </button>
                    ) : null}
                </div>
                <List apps={apps.slice(0, count)} clients={clients} />
            </div>
            <Map apps={apps.slice(0, count)} clients={clients} />
        </div>
    )
}

export default App
