import React, { useEffect, useState } from 'react';

interface DeployStatus {
  status: 'success' | 'failed' | 'pending';
  timestamp: string;
  owner: string;
}

export const DeployStatusCard: React.FC = () => {
  const [deploys, setDeploys] = useState<DeployStatus[]>([]);

  useEffect(() => {
    // Simulated deploy history
    const mockData: DeployStatus[] = [
      { status: 'success', timestamp: '2026-10-06T15:30:00Z', owner: 'alice' },
      { status: 'success', timestamp: '2026-10-05T10:15:00Z', owner: 'bob' },
      { status: 'failed', timestamp: '2026-10-04T18:45:00Z', owner: 'alice' },
    ];
    setDeploys(mockData);
  }, []);

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <h3>Recent Deploys</h3>
      <ul>
        {deploys.map((d, i) => (
          <li key={i}>
            [{d.status}] {d.timestamp} by {d.owner}
          </li>
        ))}
      </ul>
    </div>
  );
};
