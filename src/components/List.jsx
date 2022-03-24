import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

const List = ({ apps, clients }) => (
    <AutoSizer>
        {({ height, width }) => (
            <FixedSizeList
                innerElementType={'ul'}
                className="apps-list"
                height={height}
                width={width}
                itemSize={80}
                itemCount={apps.length}
            >
                {({ index, style }) => {
                    return (
                        <li
                            style={style}
                            className={
                                index % 2 ? 'apps-list-item bg-odd' : 'apps-list-item bg-even'
                            }
                        >
                            <p className="my-5 text-uppercase text-underline">
                                {clients.find((client) => client.id === apps[index].client_id).name}
                            </p>
                            <p>
                                <span className="text-bold">Тип заявки: </span>
                                {apps[index].type === 'delivery' ? ' доставка' : ' забор'}
                            </p>
                            <p>
                                <span className="text-bold">Цена: </span>
                                {apps[index].price}
                            </p>
                        </li>
                    )
                }}
            </FixedSizeList>
        )}
    </AutoSizer>
)

export default List
