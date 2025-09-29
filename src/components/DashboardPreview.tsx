import { BarChart3, TrendingUp, Shield, AlertTriangle, Globe, Activity, Filter, Calendar, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const DashboardPreview = () => {
  const [timeFilter, setTimeFilter] = useState('24h');
  const [selectedMetric, setSelectedMetric] = useState('threats');

  const timeFilters = ['1h', '24h', '7d', '30d'];
  const metrics = [
    { id: 'threats', label: 'Active Threats', value: '2,847', change: '+12%' },
    { id: 'blocked', label: 'Blocked Attacks', value: '15,249', change: '+8%' },
    { id: 'countries', label: 'Countries', value: '156', change: 'stable' },
    { id: 'uptime', label: 'Uptime', value: '99.9%', change: '+0.1%' }
  ];

  // Chart data
  const attackTrendsData = [
    { time: '00:00', attacks: 45, blocked: 38 },
    { time: '04:00', attacks: 32, blocked: 28 },
    { time: '08:00', attacks: 78, blocked: 65 },
    { time: '12:00', attacks: 95, blocked: 82 },
    { time: '16:00', attacks: 112, blocked: 98 },
    { time: '20:00', attacks: 89, blocked: 75 },
    { time: '24:00', attacks: 67, blocked: 58 }
  ];


  const attackTypesData = [
    { name: 'Phishing', value: 35, color: '#ef4444' },
    { name: 'Malware', value: 28, color: '#f97316' },
    { name: 'DDoS', value: 18, color: '#eab308' },
    { name: 'Ransomware', value: 12, color: '#dc2626' },
    { name: 'Other', value: 7, color: '#6b7280' }
  ];

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Analytics Dashboard</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-time <span className="text-primary">Threat Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Monitor global cybersecurity trends, attack patterns, and threat landscape with interactive visualizations.
          </p>
          
          {/* Interactive Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Time Range:</span>
              <div className="flex space-x-1">
                {timeFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant={timeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeFilter(filter)}
                    className="text-xs"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-destructive/50 transition-all group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Threats</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive group-hover:animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">2,847</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Blocked Attacks</CardTitle>
              <Shield className="h-4 w-4 text-primary group-hover:animate-glow-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">15,249</div>
              <p className="text-xs text-muted-foreground">+8% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Global Coverage</CardTitle>
              <Globe className="h-4 w-4 text-accent group-hover:animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">156</div>
              <p className="text-xs text-muted-foreground">Countries monitored</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-green/50 transition-all group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">System Status</CardTitle>
              <Activity className="h-4 w-4 text-cyber-green group-hover:animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyber-green">99.9%</div>
              <p className="text-xs text-muted-foreground">Uptime</p>
            </CardContent>
          </Card>
        </div>

        {/* Attack Trends Chart */}
        <div className="mb-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Attack Trends (24h)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={attackTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="time" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="attacks" 
                      stroke="hsl(var(--destructive))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 4 }}
                      name="Attacks"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="blocked" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      name="Blocked"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attack Types Distribution */}
        <div className="mt-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Attack Types Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={attackTypesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {attackTypesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--primary))',
                        fontWeight: '500'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;