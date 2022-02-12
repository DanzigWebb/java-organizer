import { ReactNode, useState } from 'react';
import { TabContextState, TabsContext } from './TabContext';

interface TabGroupProps {
    children: ReactNode;
    onChange?: (tabIndex: any) => void;
}

export const TabGroup = (props: TabGroupProps) => {

    const {
        onChange = () => {},
        children
    } = props

    const [state, setState] = useState<TabContextState>({
        activeTab: 0,
        updateActive: updateActiveTab,
        updateActiveContent: updateActiveTabContent
    });

    function updateActiveTab(index: number) {
        setState((state) => {
            return {
                ...state,
                activeTab: index
            };
        });

        onChange(index);
    }

    function updateActiveTabContent(node: ReactNode) {
        setState((state) => {
            return {
                ...state,
                activeTabContent: node
            };
        });
    }

    return (
        <TabsContext.Provider value={state}>
            <div className="tabs tabs-boxed pb-2 sticky top-0 z-10">
                {children}
            </div>

            <div className="tabs-content">
                {state.activeTabContent}
            </div>
        </TabsContext.Provider>
    );
};
