import React, { useContext, useEffect } from 'react';
import { TabsContext } from './TabContext';

interface TabProps {
    children: React.ReactNode;
    label: React.ReactNode;
    index: number;
    defaultActive?: boolean;
}

export const Tab = ({index, children, label, defaultActive}: TabProps) => {
    const context = useContext(TabsContext);
    const isActive = context.activeTab === index;

    useEffect(() => {
        if (defaultActive) {
            setActive()
        }
    }, [])

    useEffect(() => {
        if (isActive) {
            setActive();
        }
    })

    function setActive() {
        if (context.updateActiveContent) {
            if (!(context.activeTabContent === children)) {
                context.updateActiveContent(children);
                context.updateActive(index)
            }
        }
    }

    return (
        <div
            className={`tab ${isActive ? 'tab-active' : ''}`}
            onClick={() => context.updateActive(index)}
        >
            {label}
        </div>
    );
};